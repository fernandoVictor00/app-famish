import { Container , Content, Image, Label } from "./styles";

import { Header } from "@components/Header";

import { FlatList } from "react-native";
import { useState } from "react";

import { ListOrder } from "@components/ListOrder";
import { Input } from "@components/Input";
import { ButtonDouble } from "@components/ButtonDouble";
import { useNavigation } from "@react-navigation/native";

export class IOrder {
  id!: string;
  name!: string;
  url!: string;
}

export function FinalizeOrder() {
  const navigation = useNavigation();
  function handleConfirm(){
    navigation.navigate('menu')
  }
  function handleContinue(){
    navigation.navigate('menu')
  }
  const [orders, setOrders] = useState<IOrder[]>([
    {
      id: "1",
      name: "Completo carne assada",
      url: "https://img.freepik.com/fotos-gratis/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.jpg?w=2000",
    },
    {
      id: "2",
      name: "Prato de rico",
      url: "https://292aa00292a014763d1b-96a84504aed2b25fc1239be8d2b61736.ssl.cf1.rackcdn.com/PostImagem/34296/4245343011717822529467532587813895733248000n_capa.jpg",
    },
    {
      id: "3",
      name: "Prato Feito",
      url: "https://t3.ftcdn.net/jpg/04/19/14/24/360_F_419142462_eZpVD5Rkfv9ZUvsNli0Mn24umAVqg51A.jpg",
    },
    {
      id: "4",
      name: "Prato Feito",
      url: "https://t3.ftcdn.net/jpg/04/19/14/24/360_F_419142462_eZpVD5Rkfv9ZUvsNli0Mn24umAVqg51A.jpg",
    },
    {
      id: "5",
      name: "Prato Feito",
      url: "https://t3.ftcdn.net/jpg/04/19/14/24/360_F_419142462_eZpVD5Rkfv9ZUvsNli0Mn24umAVqg51A.jpg",
    },
  ]);

  return (
    <Container>
      <Header title="Meu carrinho" />
      <Content>
      <Image source={{
            uri: "https://jucisrs.rs.gov.br/upload/recortes/201707/20120923_8121_GDO.jpg",
          }}
          style={{ width: 75, height: 75}} />
        <Label>Rua Paraíba 1191, bloco b, apartamento 402</Label>
      </Content>
      <FlatList
        data={orders}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ListOrder name={item.name} url={item.url} />
        )}
      />
      <Content>
      <ButtonDouble title="Continuar Comprando" type="SECONDARY" onPress={handleContinue}/>
      <ButtonDouble title="Confirmar o pedido" />
      </Content>
      
    </Container>
  );
}
