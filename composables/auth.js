export const useAuth = () => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  // login
  const login = async (user) => {
    try {
      const { email, password } = user;
      if (!email.length || !password.length) {
        return useNuxtApp().$toast.info("please fill out input fields");
      }
      const { data } = await client.auth.signInWithPassword({
        email,
        password,
      });
      if (data.user) {
        useNuxtApp().$toast.success(`Success`);
        navigateTo("/");
      }
    } catch (err) {
      useNuxtApp().$toast.error(err.message || "something went wrong");
    }
  };
  // logout
  const logout = async () => {
    try {
      await client.auth.signOut();
      useNuxtApp().$toast.success(`${user.value.email} logout!`, {
        delay: 2000,
      });
      navigateTo("/");
    } catch (err) {
      navigateTo("/");
      useNuxtApp().$toast.error(err.message || "something went wrong");
    }
  };
  //register
  const register = async (newUser) => {
    try {
      const { email, password, username } = newUser;
      if (!email.length || !password.length || !username.length) {
        return useNuxtApp().$toast.info("please fill out input fields");
      }
      const { data } = await client.auth.signUp({
        email,
        password,
        options: {
          data: {
            username,
          },
        },
      });
      // Table add User Data
      await client
        .from("users")
        .insert([{ email: email, username: username, id: data.user.id }])
        .select("*");
      useNuxtApp().$toast.success(`Success register ${username}`);
      navigateTo("/");
    } catch (err) {
      navigateTo("/");
      useNuxtApp().$toast.error(err.message || "something went wrong");
    }
  };
  // return data
  return { register, login, logout };
};