import { supabase } from "./supabaseClient";

export async function getUser(userId) {
  try {
    let { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) throw error;
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}
  
export async function getUserList(userId) {
  try {
    let { data: lists, error } = await supabase
      .from('lists')
      .select('*')
      .or(`master.eq.${userId}, members.cs.{${userId}}`)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return lists;
  } catch (error) {
    console.error('Error fetching user lists:', error);
    throw error;
  }
}

// export async function getFollowList(userId) {
//   try {
//     let { data: lists, error } = await supabase
//       .from('lists')
//       .select('*')
//       .or(`members.cs.{${userId}}`)
//       .contains(`members`, userId)
//       .order('created_at', { ascending: true });

//     if (error) throw error;
//     return lists;
//   } catch (error) {
//     console.error('Error fetching user lists:', error);
//     throw error;
//   }
// }

export async function getPlaces(placeIdArr) {
  try {
    let { data, error } = await supabase
      .from('places')
      .select('*, reviews(count)')
      .in('place_id', placeIdArr)

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching place:', error);
    throw error;
  }
}

export async function getCurrentPlaceReviews(placeId, listIdArr) {
  try {
    let { data, error } = await supabase
      .from('reviews')
      .select('*, lists(title, icon_color), users(name)')
      .eq('place_id', placeId)
      .in('list_id', listIdArr)

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching current place review:', error);
    throw error;
  }
}

export async function updateList(listId, titleTxt, color) {
  try {
    let { data: list, error } = await supabase
      .from('lists')
      .update({ title: titleTxt, icon_color: color })
      .eq('list_id', listId)
      .select();

    if (error) throw error;
    return list;
  } catch (error) {
    console.error('Error updating list:', error);
    throw error;
  }
}