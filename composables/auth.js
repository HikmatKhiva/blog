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
      const { data } = await client.auth.signInWithPassword({
        email,
        password,
      });
      if (data.user) {
        navigateTo("/");
      }
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
    if (!email.length || !password.length || !username.length) {
      return { msg: "please fill out fields" };
    }
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
      loading.value = false;
      navigateTo("/");
    }
    return { res };
  };
  // return data
  return {register, login };
};