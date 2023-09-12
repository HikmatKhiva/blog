import { defineStore } from "pinia";
export const useStorage = defineStore("user", () => {
  const user = ref(null);
  const client = useSupabaseClient();

  const login = async (email, password) => {
    const { data } = await client.auth.signInWithPassword({
      email,
      password,
    });
    if (data) {
      user.value = data;
    }
  };
  const authChange = () => {
    client.auth.onAuthStateChange((event, session) => {
      user.value = session.user;
    });
  };

  onMounted(() => authChange());
  return { login, user };
});
