

const random_hex_color_code = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    let s = '#' + n.slice(0, 6);
    navigator.clipboard.writeText(s);
    return '#' + n.slice(0, 6);
  };

  document.getElementById('bddy').style.backgroundColor = random_hex_color_code();
  document.getElementById('cool').innerHTML = random_hex_color_code();


let shyam = () => {
    const random_hex_color_code = () => {
        let n = (Math.random() * 0xfffff * 1000000).toString(16);
        let s = '#' + n.slice(0, 6);
        navigator.clipboard.writeText(s)
        return '#' + n.slice(0, 6);
      

      };
    
      document.getElementById('bddy').style.backgroundColor = random_hex_color_code();
      document.getElementById('cool').innerHTML = random_hex_color_code();
    
    
}


