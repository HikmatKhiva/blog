export const useAuth = () => {
  const client = useSupabaseClient();
  const res = reactive({
    msg: "",
    status: null,
  });
  // login
  const login = async (user) => {
    try {
<<<<<<< HEAD
      await client.auth.signInWithPassword({
        email: user.email,
        password: user.password,
      });
      res.msg = "success login";
      res.status = 200;
=======
      const { data } = await client.auth.signInWithPassword({
        email,
        password,
      });
      if (data.user) {
        navigateTo("/");
      }
>>>>>>> cb09c2460e36a79d32c50f231d6ed75c84da2142
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
<<<<<<< HEAD
      res.msg = "success register";
      res.status = 200;
    } catch (err) {
      res.msg = "error register";
      res.status = 400;
=======
      loading.value = false;
      navigateTo("/");
    } catch (err) {
      error.value;
      console.log(err);
>>>>>>> cb09c2460e36a79d32c50f231d6ed75c84da2142
    }
    return { res };
  };
  // onAuthStateChange
<<<<<<< HEAD
  return { register, login };
=======


  // return data
  return { user, register, login };
>>>>>>> cb09c2460e36a79d32c50f231d6ed75c84da2142
};
