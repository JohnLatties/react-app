import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const footerStyles = {
            marginTop: "30px"
        };
        return (
            <footer style={footerStyles}>
                <div class="row">
                    <div class="col-lg-12">
                        <p>
                            Todo -  React.js - Jonathan Latties
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;