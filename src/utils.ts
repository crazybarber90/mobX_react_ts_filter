export const handleMainTitle = (lengthOfItems: number): string => {
  switch (lengthOfItems) {
    case 0:
      return "You don't have selected items yet"
    case 1:
      return `You currently have ${lengthOfItems} selected item`
    default:
      return `You currently have ${lengthOfItems} selected items`
  }
}
