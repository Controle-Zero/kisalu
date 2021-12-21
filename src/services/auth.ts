// A interface de resposta do backend
interface Response {
  token: string;
  user: {
    email: string;
    name: string;
  };
}

// TODO: Usar axios para login
export function signIn(): Promise<Response> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "r8u9eurvu9gwetgiaorjwkagh rf9o",
        user: {
          name: "Rafael Padre",
          email: "rafaelpadre20@gmail.com",
        },
      });
    }, 2000);
  });
}
