import { supabase } from "./supabaseClient";

export function RealtimeLists(listsId) {
    const subscription = supabase
    .channel('public:lists')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
        table: 'lists',
        filter: `list_id=in.(${listsId.join(',')})`
      },
      (payload) => {
        console.log(payload);
      }
    )
    .subscribe()

    return () => {
      subscription.unsubscribe();
    };
}