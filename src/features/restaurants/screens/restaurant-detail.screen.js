import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [semana1Expanded, setSemana1Expanded] = useState(false);
  const [semana2Expanded, setSemana2Expanded] = useState(false);
  const [semana3Expanded, setSemana3Expanded] = useState(false);
  const [semana4Expanded, setSemana4Expanded] = useState(false);
  const [semana5Expanded, setSemana5Expanded] = useState(false);
  const [semana6Expanded, setSemana6Expanded] = useState(false);
  const [semana7Expanded, setSemana7Expanded] = useState(false);
  const [semana8Expanded, setSemana8Expanded] = useState(false);
  const [semana9Expanded, setSemana9Expanded] = useState(false);
  const [semana10Expanded, setSemana10Expanded] = useState(false);
  const [semana11Expanded, setSemana11Expanded] = useState(false);
  const [evaluacionExpanded, setEvaluacionExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Semana 1"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={semana1Expanded}
          onPress={() => setSemana1Expanded(!semana1Expanded)}
        >
        <List.Item title="Contenido semana 1" />
        <List.Item
            title="First Item"
            description="Item description"
            left={props => <List.Icon {...props} icon="folder" />}
        />

        </List.Accordion>

        <List.Accordion
          title="Semana 2"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={semana2Expanded}
          onPress={() => setSemana2Expanded(!semana2Expanded)}
        >
          <List.Item title="Contenido semana 2" />
        </List.Accordion>

        <List.Accordion
          title="Semana 3"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={semana3Expanded}
          onPress={() => setSemana3Expanded(!semana3Expanded)}
        >
          <List.Item title="Contenido semana 3" />
        </List.Accordion>

        <List.Accordion
          title="Semana 4"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={semana4Expanded}
          onPress={() => setSemana4Expanded(!semana4Expanded)}
        >
          <List.Item title="Contenido semana 4" />
        </List.Accordion>

        <List.Accordion
          title="Semana 5"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={semana5Expanded}
          onPress={() => setSemana5Expanded(!semana5Expanded)}
        >
          <List.Item title="Contenido semana 5" />
        </List.Accordion>

        <List.Accordion
          title="Semana 6"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={semana6Expanded}
          onPress={() => setSemana6Expanded(!semana6Expanded)}
        >
          <List.Item title="Contenido semana 6" />
        </List.Accordion>

        <List.Accordion
          title="Semana 7"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={semana7Expanded}
          onPress={() => setSemana7Expanded(!semana7Expanded)}
        >
          <List.Item title="Contenido semana 7" />
        </List.Accordion>

        <List.Accordion
          title="Semana 8"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={semana8Expanded}
          onPress={() => setSemana8Expanded(!semana8Expanded)}
        >
          <List.Item title="Contenido semana 8" />
        </List.Accordion>

        <List.Accordion
          title="Semana 9"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={semana9Expanded}
          onPress={() => setSemana9Expanded(!semana9Expanded)}
        >
          <List.Item title="Contenido semana 9" />
        </List.Accordion>

        <List.Accordion
          title="Semana 10"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={semana10Expanded}
          onPress={() => setSemana10Expanded(!semana10Expanded)}
        >
          <List.Item title="Contenido semana 10" />
        </List.Accordion>

        <List.Accordion
          title="Semana 11"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={semana11Expanded}
          onPress={() => setSemana11Expanded(!semana11Expanded)}
        >
          <List.Item title="Contenido semana 11" />
        </List.Accordion>

        <List.Accordion
          title="Evaluacion"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={evaluacionExpanded}
          onPress={() => setEvaluacionExpanded(!evaluacionExpanded)}
        >
          <List.Item title="Contenido de evaluacion" />
        </List.Accordion>

      </ScrollView>
    </SafeArea>
  );
};
