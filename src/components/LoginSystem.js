        const a = document.getElementById("btn")
        const b = document.getElementById("left")
        const c = document.getElementById("right")
        const d = document.getElementById("register-form")
        const e = document.getElementById("login-form")

        function register() {
            c.style.color = "black";
            b.style.color = "white";
            d.style.right = "48px";
            e.style.left = "378px";
        }

        function login() {
            c.style.color = "white";
            b.style.color = "black";
            d.style.right = "-330px";
            e.style.left = "0px";
        }