export const useAuth = () => {
  const client = useSupabaseClient();
  const user = useSupabaseClient();
  const loading = ref(false);
  const error = ref(null);
  // login
  const login = async (email, password) => {
    try {
      await client.auth.signInWithPassword({ email, password });
    } catch (err) {
      console.log(err);
    }
  };
  // logout
  //register
  const register = async (newUser) => {
    loading.value = true;
    const { email, password, username } = newUser;
    try {
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
      loading.value = false;
    } catch (err) {
        error.value
      console.log(err);
    }
    return { loading, msg: "success" };
  };
  // onAuthStateChange
  return { user, register, login };
};