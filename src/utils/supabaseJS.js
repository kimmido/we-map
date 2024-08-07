import { supabase } from "./supabaseClient";

export async function getUser(name) {
    let { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('name', name)
    .single()
  
    if(error) {
      console.log(error);
    } else {
      return user;
    }
  }
  
  export async function getUserList(userId) {
    let { data: lists, error } = await supabase
    .from('lists')
    .select('*, places(*), reviews(*)')
    .or(`master.eq.${userId}, members.cs.{${userId}}`)
    .order('created_at', { ascending: true })
  
    if(error) {
      console.log(error);
    } else {
      return lists;
    }
  }
  
  export async function updateList(id, titleTxt, color) {
    let { data: list, error } = await supabase
    .from('lists')
    .update({ title: titleTxt, icon_color: color })
    .eq('list_id', id)
    .select()
    
    if(error) {
      console.log(error);
    } else {
      return list;
    }
  }