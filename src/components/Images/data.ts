const dummiesImg = import.meta.glob("../../../public/dummies/*webp");

export const dummiesAvatar = Object.keys(dummiesImg).map((path) =>
  path.replace("./public", "").replace("../../..", "")
);
