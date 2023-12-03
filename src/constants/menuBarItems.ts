import { USER_ROLE } from "./role";


export const MenuBarItems = (role: string) => {

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
        return UserLinksItems;
    } else if (role === USER_ROLE.ADMIN) {
      return UserLinksItems;
    } else if(role === USER_ROLE.SUPER_ADMIN) {
      return UserLinksItems;
    } else {
        return DefaultLinkItems;
    }
}
