import React from "react";
import Footer from "../components/Footer";

export function FooterContainer(){
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Story </Footer.Link>
                    <Footer.Link href="#">Clients </Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title> Services</Footer.Title>
                    <Footer.Link href="#">Story </Footer.Link>
                    <Footer.Link href="#">Clients </Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Coder</Footer.Title>
                    <Footer.Link href="#">Story </Footer.Link>
                    <Footer.Link href="#">Clients </Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Title>Career</Footer.Title>
                    <Footer.Link href="#">Story </Footer.Link>
                    <Footer.Link href="#">Clients </Footer.Link>
                    <Footer.Link href="#">Testimonials</Footer.Link>
                </Footer.Column>
                </Footer.Row>
            </Footer.Wrapper>
        </Footer>
    )
}

