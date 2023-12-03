import { useRouter } from "next/navigation";
import { USER_ROLE } from "./role";
import { removeUserInfo } from "@/services/auth.service";
import { authKey } from "./storageKey";


export const MenuBarItems = (role: string) => {
  const router = useRouter();
  const logOut = () => {
      removeUserInfo(authKey);
      router.push("/login");
  };
    const DefaultLinkItems = [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'About',
          path: '/about',
        },
        {
          name: 'Events',
          path: '/events',
        },
        {
          name: 'Blog',
          path: '/blog',
        },
        {
          name: 'Contact',
          path: '/contact',
        },
        {
            name: 'Login',
            path: '/login',
        },
        {
            name: 'Sign Up',
            path: '/registration',
        }
      ];

      const UserLinksItems = [
        {
            name: 'Home',
            path: '/',
          },
          {
            name: 'About',
            path: '/about',
          },
          {
            name: 'Events',
            path: '/events',
          },
          {
            name: 'Blog',
            path: '/blog',
          },
          {
            name: 'Contact',
            path: '/contact',
          }
    ]

    if(role === USER_ROLE.CUSTOMER) {
        return UserLinksItems
    } else {
        return DefaultLinkItems
    }
}
