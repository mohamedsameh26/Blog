import './sideBar.css'

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias velit iste eos maxime, est sequi atque corporis</p>
            </div>
            <div className="sideBarItem">
                <div className="sideBarTitle">CATEGORIES</div>
                <ul className="sideBarList">
                    <li className="sideBarListItem">Life</li>
                    <li className="sideBarListItem">Music</li>
                    <li className="sideBarListItem">Style</li>
                    <li className="sideBarListItem">Sport</li>
                    <li className="sideBarListItem">Tech</li>
                    <li className="sideBarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sideBarItem">
                <div className="sideBarTitle">FOLLOW US</div>
                <div className="sideBarSocial">
                    <i className="sideBarIcon fab fa-facebook-square"></i>
                    <i className="sideBarIcon fab fa-twitter-square"></i>
                    <i className="sideBarIcon fab fa-pinterest-square"></i>
                    <i className="sideBarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}

export default SideBar
