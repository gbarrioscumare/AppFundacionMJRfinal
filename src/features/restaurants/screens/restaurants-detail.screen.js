import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);

  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          title="Semana 1"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={breakfastExpanded}
          onPress={() => setBreakfastExpanded(!breakfastExpanded)}
        >
          <List.Item title="Contenido semana 1" />
        </List.Accordion>

        <List.Accordion
          title="Semana 2"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Contenido semana 2" />
        </List.Accordion>

        <List.Accordion
          title="Semana 3"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Contenido semana 3" />
        </List.Accordion>

        <List.Accordion
          title="Semana 4"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Contenido semana 4" />
        </List.Accordion>

        <List.Accordion
          title="Semana 5"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Contenido semana 5" />
        </List.Accordion>

        <List.Accordion
          title="Semana 6"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Contenido semana 6" />
        </List.Accordion>

        <List.Accordion
          title="Semana 7"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Contenido semana 7" />
        </List.Accordion>

        <List.Accordion
          title="Semana 8"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Contenido semana 8" />
        </List.Accordion>

        <List.Accordion
          title="Semana 9"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Contenido semana 9" />
        </List.Accordion>

        <List.Accordion
          title="Semana 10"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Contenido semana 10" />
        </List.Accordion>

        <List.Accordion
          title="Semana 11"
          left={(props) => <List.Icon {...props} icon="book" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Contenido semana 11" />
        </List.Accordion>


      </ScrollView>
    </SafeArea>
  );
};