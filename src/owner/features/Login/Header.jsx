import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

// icons
const iconLogo = <svg viewBox="0 0 420 134" xmlns="http://www.w3.org/2000/svg"><g fill-rule="evenodd"><path d="M76.968 94.081c-.741 6.073-4.447 10.939-10.187 13.374-3.194 1.356-7.476 2.086-10.871 1.856-5.279-.2-10.241-1.478-14.812-3.809-1.664-.848-4.104-2.525-5.943-4.058-.42-.348-.635-.66-.232-1.228.43-.645 2.13-3.102 2.398-3.507.362-.552.956-.58 1.5-.153.075.057.628.486.74.569 4.4 3.423 10.076 5.994 16.384 6.235 7.955-.108 13.726-3.65 14.757-9.136 1.135-6.046-3.69-11.231-12.98-14.124-2.953-.92-10.38-3.872-11.75-4.672-6.474-3.77-9.488-8.717-9.058-14.807.657-8.438 8.534-14.762 18.53-14.804 4.744-.01 9.194 1.036 13.159 2.695 1.459.61 4.176 2.066 5.145 2.785.677.494.625 1.046.358 1.474-.395.656-1.57 2.483-2.043 3.245-.345.523-.773.583-1.38.2-5.112-3.41-10.37-4.567-15.103-4.661-6.828.134-11.978 4.165-12.316 9.691-.09 4.992 3.729 8.613 11.833 11.378C71.83 77.964 78.17 84.24 76.968 94.08zM56.32 7.34c10.83 0 19.66 10.208 20.073 22.986H36.248C36.66 17.548 45.489 7.34 56.32 7.34zM97.44 125.687c5.72-.155 10.355-4.776 10.844-10.504l.037-.692 4.05-81.638v-.001a2.402 2.402 0 0 0-2.4-2.526H83.95C83.312 13.454 71.185 0 56.32 0 41.455 0 29.33 13.454 28.69 30.326H2.632a2.402 2.402 0 0 0-2.35 2.588H.28l3.696 81.319.055 1.02c.564 5.658 4.7 10.215 10.322 10.425h.002l82.669.013.414-.004zM156.886 71.341c17.803 5.329 24.807 11.993 23.687 22.693-.69 6.591-4.631 11.946-10.809 14.69-3.405 1.512-7.967 2.371-11.606 2.19-5.602-.115-10.897-1.376-15.8-3.763-1.77-.862-4.38-2.575-6.41-4.204l-.008-.006c-.949-.799-1.062-1.318-.413-2.28.168-.262.476-.728 1.186-1.8.61-.919 1.219-1.843 1.248-1.889.76-1.146 1.563-1.146 2.67-.385l.393.291.39.29c5.041 3.771 10.862 5.897 16.664 6.017 7.94-.245 13.54-3.81 14.44-9.1.99-5.818-3.817-10.806-13.208-13.545-3.285-.958-10.464-3.649-12.467-4.702-7.044-3.932-10.44-9.275-10.086-15.924.557-9.205 8.992-16.193 19.765-16.426 4.734-.091 9.472.8 14.037 2.613 1.645.654 4.528 2.145 5.567 2.886 1.209.853 1.209 1.442.62 2.544-.083.144-.397.598-1.21 1.761l-.003.004c-.859 1.227-1.116 1.598-1.192 1.724-.706.915-1.299 1.198-2.508.468-4.753-3.046-9.573-4.483-15.022-4.497-6.715.25-11.647 4.23-11.884 9.51.002 4.757 3.772 8.212 11.96 10.84zm49.938-2.667c10.861 0 19.83 8.768 19.87 19.512v20.99c0 1.21-.31 1.496-1.5 1.496h-4.99c-1.2 0-1.5-.285-1.5-1.497V88.25c-.026-6.48-5.337-11.721-11.88-11.721-6.527 0-11.83 5.217-11.88 11.675v20.972c0 1.043-.41 1.498-1.5 1.498h-5.002c-1.19 0-1.5-.44-1.5-1.498V44.961c0-1.102.31-1.496 1.5-1.496h5.002c1.072 0 1.5.415 1.5 1.496v27.635a19.956 19.956 0 0 1 11.88-3.922zm47.72 34.434c7.519 0 13.611-5.97 13.611-13.331 0-7.362-6.093-13.332-13.611-13.332-7.52 0-13.612 5.97-13.612 13.332 0 7.361 6.093 13.331 13.612 13.331zm.004-34.39c11.871 0 21.496 9.43 21.496 21.069 0 11.638-9.625 21.07-21.496 21.07-11.87 0-21.497-9.432-21.497-21.07 0-11.639 9.626-21.07 21.497-21.07zm132.809 16.178h23.813c-1.712-4.86-6.694-8.492-12.012-8.492-5.514 0-10.239 3.395-11.801 8.492zm29.72 7.726l-.095-.002h-30.114c.763 3.867 3.42 7.16 7.093 9.003.951.454 1.988.832 3.094 1.13 5.38 1.125 11.556.305 16.263-3.876.067-.075.195-.155.333-.276.788-.696 1.343-.52 1.962.252 0 0 .884 1.228 2.463 3.741.68 1.06.63 1.57-.51 2.744-.047.047-.136.13-.268.246a13.8 13.8 0 0 1-.775.629c-.856.645-1.88 1.29-3.073 1.89-4.41 2.22-9.844 3.266-16.303 2.489-.215-.033-.386-.06-.551-.088v.012l-.368-.069c-4.721-.88-8.962-3.232-12.082-6.666l-.022-.025a20.542 20.542 0 0 1-5.163-11.136h-.005l-.033-.274c-.1-.858-.152-1.722-.152-2.592 0-11.634 9.123-21.07 20.381-21.07 11.26 0 20.381 9.435 20.381 21.07v.156c.003.055.005.113.005.177 0 1.355-1.037 2.473-2.351 2.532a2.957 2.957 0 0 1-.11.003zM303.78 102.999c7.383 0 13.367-5.968 13.367-13.331 0-7.363-5.984-13.332-13.367-13.332-7.257 0-13.183 5.774-13.363 12.986v.687c.182 7.218 6.108 12.99 13.363 12.99zm.004-34.391c11.666 0 21.125 9.433 21.125 21.07s-9.459 21.07-21.125 21.07a21.068 21.068 0 0 1-13.367-4.754v24.738c0 1.11-.31 1.496-1.5 1.496h-4.758c-1.19 0-1.5-.395-1.5-1.496V70.104c0-1.163.31-1.496 1.5-1.496h4.758c1.19 0 1.5.363 1.5 1.496v3.258a21.07 21.07 0 0 1 13.367-4.754zm36.387 16.288h23.813c-1.712-4.86-6.694-8.492-12.012-8.492-5.514 0-10.239 3.395-11.801 8.492zm32.176 4.858l-.001.156c.004.055.005.113.005.177 0 1.355-1.036 2.473-2.35 2.532a2.96 2.96 0 0 1-.206 0h-30.114c.764 3.868 3.42 7.161 7.094 9.004.951.454 1.988.832 3.094 1.13 5.38 1.125 11.555.305 16.262-3.876.068-.075.195-.155.333-.276.789-.696 1.344-.52 1.963.252 0 0 .884 1.228 2.462 3.741.68 1.06.63 1.57-.51 2.744-.046.047-.135.13-.267.246-.216.19-.475.401-.775.629-.856.645-1.88 1.29-3.073 1.89-4.41 2.22-9.844 3.266-16.303 2.489-.215-.033-.386-.06-.551-.088v.012l-.368-.069c-4.721-.88-8.962-3.232-12.082-6.666l-.022-.025a20.541 20.541 0 0 1-5.163-11.136h-.005l-.033-.274a22.122 22.122 0 0 1-.153-2.592c0-11.634 9.124-21.07 20.382-21.07 11.259 0 20.38 9.435 20.38 21.07z"></path></g></svg>

const iconFacebook = <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm-.75-2h1.5V8.8h1.875L11 7.6H8.75V7c0-.48.113-1.5.938-1.5H11V4.09c-.188-.03-.563-.09-1.313-.09C8.15 4 7.25 4.39 7.25 5.8v1.8H5v1.2h2.25V13z" fill-rule="nonzero"></path></svg>
const iconInstagram = <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M4 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm0 1a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H4zm8 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4 8.5a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm0-1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" fill-rule="nonzero"></path></svg>

const WidgetContent = styled.header`
    padding: .8125rem 1rem;
    background-color: #fff;
    box-shadow: 0 1px 4px 0 rgba(74,74,78,.12);

    .left{
        font-size: 1.125rem;
        color: #1d1d1d;

        svg{
            width: 97px;
            fill: #ee4d2d;
        }

        span{
            margin-left: .5rem;
            margin-top: .5rem;
        }
    }


    .right{
        font-size: .875rem;

        a.return-home{
            position: relative;
            margin-right: 4rem;
            color: #333;

            span{
                position: absolute;
                top: -10px;
                right: -36px;

                display: block;
                padding: .125rem .25rem;
                border-radius: .5rem;
    
                font-size: .75rem;
    
                background-color: #e51111;
                color: #fff;
                line-height: .875rem;
    
            }
        }

        a.social-icon{
            margin-left: 2rem;
        }

        

        svg{
            width: 1rem;
            height: 1rem;
        }
    }
`;


function Header() {
    return (
        <WidgetContent>
            <div className="d-flex align-items-center justify-content-between">
                <div className="left">
                    <a className="d-flex align-items-center" href="#/">
                        {iconLogo}
                        <span>Kênh Người Bán</span>
                    </a>
                </div>

                <div className="d-flex align-items-center right">
                    <Link to="/" className="return-home">Trang chủ Shopee <span>MỚI</span></Link>
                    <a href="#/" className="social-icon">{iconFacebook}</a>
                    <a href="#/" className="social-icon">{iconInstagram}</a>
                </div>
            </div>
        </WidgetContent>
    );
}

export default Header;