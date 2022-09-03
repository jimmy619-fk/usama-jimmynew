import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <>
      <div>
        <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text" className="registeredwala">
                  Registered Office:
                </h5>
                <p class="grey-text text-lighten-4">
                  23-B, Lalazar, Off M.T Khan Road, Karachi, Pakistan
                </p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text" className="socialwala">
                  Social{" "}
                </h5>
                <ul>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a class="grey-text text-lighten-3" href="#!">
                      Whatsapp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div class="container">© 2022 Fossil Energy</div>
          </div>
        </footer>
      </div>
    </>
  );
}
