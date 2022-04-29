function Home(){
    return(
        <div style = {{
            marginBottom: "12px",
            paddingLeft: "100px",
            height: "80vh"
        }}>
            <p>Welcome to my application!</p>
            <p>This is my project for my Phase 3 Project at Flatiron.</p>

            <p><b><i>WARNING:</i></b></p>
            <div style={{
                textAlign: "left"
            }}>
                <article align="left">
                    This application is currently <b>incomplete</b>.  It is either still in development (a rough draft of the final version), or this project has been abandoned.
                </article>
                <article>
                    <p>As such, there <i>will</i> be bugs and bad grammar on one or all of the pages of this website.  We are currently working on these issues.</p>
                    <p>Thank you for your understanding, and we hope that you enjoy!</p>
                </article>
            </div>
        </div>
    )
}

export default Home;