export const getMorningOrEveningTime = (): string => {
    const currentDate = new Date();
    const currentHour = currentDate.getHours();
  
    if (currentHour >= 6 && currentHour < 12) {
      return 'Good Morning';
    } else if (currentHour >= 12 && currentHour < 18) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  }