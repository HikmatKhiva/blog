export const useAuth = () => {
  const client = useSupabaseClient();
  const res = reactive({
    msg: "",
    status: null,
  });
  // login
  const login = async (user) => {
    try {
      await client.auth.signInWithPassword({
        email: user.email,
        password: user.password,
      });
      res.msg = "success login";
      res.status = 200;
    } catch (err) {
      console.log(err);
      res.status = 400;
      res.msg = "error login";
    }
    return { res };
  };
  // logout
  //register
  const register = async (newUser) => {
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
      res.msg = "success register";
      res.status = 200;
    } catch (err) {
      res.msg = "error register";
      res.status = 400;
    }
    return { res };
  };
  // onAuthStateChange
  return { register, login };
};
