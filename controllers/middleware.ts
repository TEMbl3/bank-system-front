import axios from "axios";
import { useRouter } from "vue-router";
import type { IUser } from "@/interfaces.ts";
import { useUserStore } from "../stores/userStore";

export default async () => {
  const router = useRouter();
  const token = useCookie("jwt").value;
  const store = useUserStore();

  if (token) {
    try {
      const response = await axios.get("http://localhost:3005/auth/checkAuth", {
        headers: {
          Authorization: `Bearer ${token}`, // Добавляем токен в заголовок
        },
      });
      if (!response.data.success) {
        return router.push("/login");
      }
      if (!store.user) {
        store.setUser(response.data as IUser);
      } else {
        console.log("уже было");
      }
    } catch (error) {
      console.error("Ошибка проверки токена:", error);
      return router.push("/login");
    }
  } else {
    return router.push("/login");
  }
};
