export const BreakPoint = {
    medium: 'medium',
    small: 'small',
}


export const respond = (breakPoint, content) => {
    switch (breakPoint) {

     case BreakPoint.medium:
            return `@media only screen and (max-width: 960px ) { ${content} }`;  //600px

      case BreakPoint.small:
          return `@media only screen and (max-width: 600px ) { ${content} }`;  //600px

      default:
        return ``;
    }
  };