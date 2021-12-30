// A interface de resposta do backend
interface Response {
  token: string;
  user: {
    name: string;
    type: "client" | "provider";
    email: string;
  };
}

interface SignInRequest {
  email: string,
  password: string,
  userType: "client" | "provider",
}

// TODO: Usar axios para login
export function signIn({email, password, userType} : SignInRequest): Promise<Response> {

  const FAKE_EMAIL = "rafaelpadre20@gmail.com";
  const FAKE_PASSWORD = "123456789";

  return new Promise((resolve, reject) => {

    if(email !== FAKE_EMAIL || password !== FAKE_PASSWORD) {
      reject("Credenciais inválidas");
    }
    setTimeout(() => {
      resolve({
        token: "r8u9eurvu9gwetgiaorjwkagh rf9o",
        user: {
          name: "Rafael Padre",
          email,
          type: userType,
        },
      });
    }, 500);

  });
}
