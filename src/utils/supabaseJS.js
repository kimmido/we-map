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
      .select('*, places(*), reviews(*)')
      .or(`master.eq.${userId}, members.cs.{${userId}}`)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return lists;
  } catch (error) {
    console.error('Error fetching user lists:', error);
    throw error;
  }
}

export async function getReviews(userId) {
  try {
    let { data: lists, error } = await supabase
      .from('lists')
      .select('reviews(*)')
      .or(`master.eq.${userId}, members.cs.{${userId}}`)
      .order('created_at', { ascending: true });

    if (error) throw error;
    return lists;
  } catch (error) {
    console.error('Error fetching user lists:', error);
    throw error;
  }
}

export async function updateList(id, titleTxt, color) {
  try {
    let { data: list, error } = await supabase
      .from('lists')
      .update({ title: titleTxt, icon_color: color })
      .eq('list_id', id)
      .select();

    if (error) throw error;
    return list;
  } catch (error) {
    console.error('Error updating list:', error);
    throw error;
  }
}