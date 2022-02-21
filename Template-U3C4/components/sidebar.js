function sidebar() {


    // return your html component here
    //Make sure to give input search box id as ""
    return `
    
    <p id = "MasaiHeading">Masai News</p>
    <input type="search" id = "searchbar" placeholder="Search News....">
    <div id = "LoginSignUpBox">
      <a href="">Login</a>
      <br>
      <a href="">SignUp</a>
      <br>
      <a href="">News</a>
      <br>
      <a href="">Api</a>
      <br>
    </div>
    `
}
export default sidebar