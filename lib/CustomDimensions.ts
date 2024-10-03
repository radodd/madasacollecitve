// customDimensions.ts

export const customWidthByIndexMadasa = (
  index: number,
  isMobile: boolean,
  isTablet: boolean
): number => {
  if (isMobile) {
    switch (index) {
      case 0:
      case 1:
      case 3:
      case 4:
      case 5:
        return 42;
      case 2:
        return 31;
      default:
        return 42;
    }
  } else if (isTablet) {
    switch (index) {
      case 0:
      case 1:
      case 3:
      case 4:
      case 5:
        return 75;
      case 2:
        return 56;
      default:
        return 75;
    }
  } else {
    switch (index) {
      case 0:
      case 1:
      case 3:
      case 4:
      case 5:
        return 96;
      case 2:
        return 71;
      default:
        return 96;
    }
  }
};

export const customHeightByIndexMadasa = (
  index: number,
  isMobile: boolean,
  isTablet: boolean
): number => {
  if (isMobile) {
    return 42;
  } else if (isTablet) {
    return 75;
  } else {
    return 96;
  }
};

export const customWidthByIndex = (
  index: number,
  isMobile: boolean,
  isTablet: boolean
): number => {
  if (isMobile) {
    switch (index) {
      case 0:
      case 5:
        return 27;
      case 1:
        return 28;
      case 2:
      case 3:
        return 19;
      case 4:
      case 9:
        return 20;
      case 6:
        return 25;
      case 7:
        return 6;
      case 8:
        return 29;
      default:
        return 20;
    }
  } else if (isTablet) {
    switch (index) {
      case 0:
      case 5:
        return 49;
      case 1:
        return 51;
      case 2:
      case 3:
        return 35;
      case 4:
      case 9:
        return 37;
      case 6:
        return 45;
      case 7:
        return 11;
      case 8:
        return 52;
      default:
        return 37;
    }
  } else {
    switch (index) {
      case 0:
      case 5:
        return 62;
      case 1:
        return 65;
      case 2:
      case 3:
        return 44;
      case 4:
      case 9:
        return 46;
      case 6:
        return 57;
      case 7:
        return 14;
      case 8:
        return 66;
      default:
        return 46;
    }
  }
};

export const customHeightByIndex = (
  index: number,
  isMobile: boolean,
  isTablet: boolean
): number => {
  if (isMobile) {
    return 30;
  } else if (isTablet) {
    return 54;
  } else {
    return 66;
  }
};
