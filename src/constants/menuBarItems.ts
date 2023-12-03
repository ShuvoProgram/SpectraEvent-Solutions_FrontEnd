import { USER_ROLE } from "./role";


export const menuBarItems = (role: string) => {
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
          },
          {
            name: 'Account Profile',
            path: `${role}/profile`
          }
    ]

    if(role === USER_ROLE.CUSTOMER) {
        return UserLinksItems
    } else {
        return DefaultLinkItems
    }
}
