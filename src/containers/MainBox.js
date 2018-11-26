import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state={
      displayedPage: <Profile />
    }
  }

  changePage = str => {
    switch (str) {
      case 'profile':
        this.setState({ displayedPage: <Profile />})
        break;
      case 'photo':
        this.setState({ displayedPage: <Photos />})
        break;
      case 'cocktail':
        this.setState({ displayedPage: <Cocktails />})
        break;
      case 'pokemon':
        this.setState({ displayedPage: <Pokemon />})
        break;
      default:
        break;
    }
  }


  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar changePage={this.changePage}/>
        {this.state.displayedPage}
      </div>
    )
  }

}

export default MainBox
