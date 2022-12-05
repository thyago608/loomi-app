import {
  HouseSimple,
  Wrench,
  Truck,
  ShoppingCartSimple,
  ChatCentered,
  User,
  Cards,
  Nut,
} from "phosphor-react";

export const ICONS = [
  {
    icon: <HouseSimple size={25} color="#bebbbb" />,
    path: "/dashboard",
    name: "Início",
  },
  {
    icon: <Cards size={25} color="#bebbbb" />,
    path: "/addProduct",
    name: "Adicionar Produto",
  },
  {
    icon: <Wrench size={25} color="#bebbbb" />,
    path: "/",
    name: "Ajustes de perfil",
  },
  {
    icon: <Truck size={25} color="#bebbbb" />,
    path: "/",
    name: "Entrega",
  },
  {
    icon: <ShoppingCartSimple size={25} color="#bebbbb" />,
    path: "/",
    name: "Carrinho",
  },
  {
    icon: <ShoppingCartSimple size={25} color="#bebbbb" />,
    path: "/",
    name: "Compras",
  },
  {
    icon: <ChatCentered size={25} color="#bebbbb" />,
    path: "/",
    name: "Chat",
  },
  {
    icon: <User size={25} color="#bebbbb" />,
    path: "/",
    name: "Perfil",
  },
  {
    icon: <Nut size={25} color="#bebbbb" />,
    path: "/",
    name: "Configurações de conta",
  },
];
