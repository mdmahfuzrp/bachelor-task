import { message } from "antd";

export function setCookie(name, value, daysToExpire) {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + daysToExpire);

  const cookieString = `${name}=${value}; expires=${expirationDate.toUTCString()}; path=/`;

  document.cookie = cookieString;
}

export function getCookie(name) {
  if (typeof document !== "undefined") {
    // code that relies on the document object
    const cookies = document?.cookie?.split("; ");
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=");
      if (cookieName === name) {
        return cookieValue;
      }
    }
  }
  return null;
}

export async function deleteCookie(router) {
  document.cookie = `${process.env.NEXT_PUBLIC_ADMIN_SECRET}=; Max-Age=-99999999; path=/;`;
  router.push("/");
  message.success("Logged out successfully.");
}
// deleteCookie(router)
