const changeSearch = (target) => {
  switch (target.value) {
    case 'DuckDuckGo':
      localStorage.setItem('search', 'DuckDuckGo')
      break;
    case 'Brave':
      localStorage.setItem('search', 'Brave');
      break;
    case 'Google':
      localStorage.setItem('search', 'Google');
      break;
    default: 
      localStorage.setItem('search', 'DuckDuckGo')
  }
}
