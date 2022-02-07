import react from "react"

function Footer(){
    return(

        <div>
             
             <div class="footer-basic">
        <footer>
            <div class="social"><a href="#"><i class="icon ion-social-instagram"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-facebook"></i></a></div>
            <div class="dive" >
                <span ><a href="#">Home</a></span>
                <span ><a href="#">Privacy</a></span>
                <span ><a href="#">Contact</a></span>
                <span ><a href="#">About us</a></span>
                <span ><a href="#">Links</a></span>
            </div>
        </footer>
    </div>

<div class="flex-1 flex justify-between">
    <a href="#" class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
      Previous
    </a>
    <a href="#" class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
      Next
    </a>
  </div>

  <div class="footer-copyright text-center py-3">© Snippy066:
    <a href="https://github.com/snippy066" style={{color:"blue"}}>snippy066</a>
  </div>




        </div>
    );
}

export default Footer;