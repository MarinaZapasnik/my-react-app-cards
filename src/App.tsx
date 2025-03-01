import "./App.css";

import { myTheme } from "./styles/animations/Theme.styled";
import { Card } from "./components/Card.styled";
import { CardImageContainer } from "./components/CardImage.styled";
import {
  CardContent,
  CardDescription,
  CardTitle,
} from "./components/CardContent.styled";
import { Button, ButtonsGroup } from "./components/Buttons.styled";
import { CardsContainer } from "./components/CardsContainer.styled";

const cards = [
  {
    id: new Date().getTime(), 
    title: "Headline 1",
    description: "Description 1",
    image: myTheme.images.desert,
  },
  {
    id: new Date().getTime(), 
    title: "Headline 2",
    description: "Description 2",
    image: myTheme.images.lavender,
  },
  {
    id: new Date().getTime(), 
    title: "Headline 3",
    description: "Description 3",
    image: myTheme.images.mountains,
  },
  {
    id: new Date().getTime(), 
    title: "Headline 4",
    description: "Description 4",
    image: myTheme.images.sea,
  },
];

function App() {
  return ( 
    <CardsContainer>
      {cards.map((card) => 
      <Card key={card.id} color={myTheme.colors.cardColor}>
       <CardImageContainer imageUrl={card.image}>         
       </CardImageContainer>
       <CardContent>
         <CardTitle
           color={myTheme.colors.contentColors.title}
           fontFamily={myTheme.fonts.primary}
         >
           {card.title}
         </CardTitle>
         <CardDescription
           color={myTheme.colors.contentColors.description}
           fontFamily={myTheme.fonts.primary}
         >
           {card.description}
         </CardDescription>
         <ButtonsGroup>
           <Button
             color={myTheme.colors.buttonColors.white}
             borderColor={myTheme.colors.buttonColors.blue}
             textColor={myTheme.colors.buttonColors.blue}
             hoverColor={myTheme.colors.buttonColors.blue}
             activeColor={myTheme.colors.buttonColors.blue}
             textActiveColor={myTheme.colors.buttonColors.white}
             textHoverColor={myTheme.colors.buttonColors.white}
             fontFamily={myTheme.fonts.primary}
           >
             See more
           </Button>
           <Button
             color={myTheme.colors.buttonColors.white}
             borderColor={myTheme.colors.buttonColors.blue}
             textColor={myTheme.colors.buttonColors.blue}
             hoverColor={myTheme.colors.buttonColors.blue}
             activeColor={myTheme.colors.buttonColors.blue}
             textActiveColor={myTheme.colors.buttonColors.white}
             textHoverColor={myTheme.colors.buttonColors.white}
             fontFamily={myTheme.fonts.primary}
           >
             Save
           </Button>
         </ButtonsGroup>
       </CardContent>
     </Card>
 )}
      
    </CardsContainer>
     
    
  );
}

export default App;
