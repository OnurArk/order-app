import React from "react";

const MenuInfo = React.createContext({
  foodListInfo: [],
});

const menu = [
  {
    foodImg:
      "https://i.pinimg.com/564x/ae/c9/7a/aec97a2bab47ab892efe7c4979e52004.jpg",
    foodName: "Mantı",
    foodPrice: 15,
    key: "a1",
  },
  {
    foodImg:
      "https://i.pinimg.com/564x/be/94/7e/be947ef02b10c16dfdf8214cb93ada41.jpg",
    foodName: "Adana Kepap",
    foodPrice: 30,
    key: "a2",
  },
  {
    foodImg:
      "https://i.pinimg.com/564x/81/db/40/81db4019f4395a73f2abc1894033b970.jpg",
    foodName: "Dürüm Döner",
    foodPrice: 10,
    key: "a3",
  },
  {
    foodImg:
      "https://i.pinimg.com/564x/0b/59/1a/0b591a7c1d908c65e23ff305f2757e5e.jpg",
    foodName: "Sarma",
    foodPrice: 15,
    key: "a4",
  },
  {
    foodImg:
      "https://i.pinimg.com/564x/b4/f2/31/b4f2311036b90b76b28642c7886673f2.jpg",
    foodName: "Fettucini Alfredo",
    foodPrice: 15,
    key: "a5",
  },
  {
    foodImg:
      "https://i.pinimg.com/564x/3c/c9/50/3cc95007904150252fa088e11e433fd6.jpg",
    foodName: "Domatez Soslu Makarna",
    foodPrice: 15,
    key: "a6",
  },
  {
    foodImg:
      "https://i.pinimg.com/564x/e3/5b/49/e35b49719fc836bb0e04df63e549ae96.jpg",
    foodName: "Köri Soslu Makarna",
    foodPrice: 15,
    key: "a7",
  },
  {
    foodImg:
      "https://i.pinimg.com/564x/33/04/43/330443bec19ab6ec8dccd9bdbd51d721.jpg",
    foodName: "Tantuni",
    foodPrice: 18,
    key: "a8",
  },
  {
    foodImg:
      "https://i.pinimg.com/564x/2b/72/70/2b7270c118c15856c2f51a87b82acce3.jpg",
    foodName: "Mercimek Çorması",
    foodPrice: 5,
    key: "a9",
  },
  {
    foodImg:
      "https://i.pinimg.com/564x/e3/fb/a4/e3fba447c061b884bbc2e6ccbd6ff322.jpg",
    foodName: "Domates Çorbası",
    foodPrice: 6,
    key: "a10",
  },
  {
    foodImg:
      "https://i.pinimg.com/564x/1b/60/78/1b6078b5bd51521860a43103b0a6cae5.jpg",
    foodName: "Karışık Pizza",
    foodPrice: 10,
    key: "a11",
  },
  {
    foodImg:
      "https://i.pinimg.com/564x/79/e6/a5/79e6a5f274d2479eb245415ab910a807.jpg",
    foodName: "Haburger",
    foodPrice: 12,
    key: "a12",
  },

  {
    foodImg:
      "https://i.pinimg.com/564x/9b/57/03/9b5703a2e6ecef42a84bbebfd360aca8.jpg",
    foodName: "Patates Kızarması",
    foodPrice: 5,
    key: "a13",
  },
  {
    foodImg:
      "https://i.pinimg.com/564x/39/92/26/399226cf4c634497d22908483ccb8f83.jpg",
    foodName: "Lahmacun",
    foodPrice: 7,
    key: "a14",
  },
  {
    foodImg:
      "https://i.pinimg.com/564x/9a/ed/ec/9aedecf2577f84203f9f3ab1b2c98864.jpg",
    foodName: "Kumpir",
    foodPrice: 10,
    key: "a15",
  },
];

export const AuthContextProvider = (props) => {
  return (
    <MenuInfo.Provider
      value={{
        foodListInfo: menu,
      }}
    >
      {props.children}
    </MenuInfo.Provider>
  );
};

export default MenuInfo;
