import React from 'react';
import {
    FacebookShareButton,
    FacebookIcon,
    LinkedinShareButton,
    LinkedinIcon,
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon,
    WhatsappShareButton,
    WhatsappIcon
} from 'react-share';

const ShareButtons = ({ url, title, description }) => (
    <div className="post-meta-share-icons">
        <FacebookShareButton url={url} quote={description}>
            <FacebookIcon />
        </FacebookShareButton>

        <LinkedinShareButton url={url} title={title} description={description}>
            <LinkedinIcon />
        </LinkedinShareButton>

        <TwitterShareButton url={url} title={title}>
            <TwitterIcon />
        </TwitterShareButton>

        <WhatsappShareButton url={url} title={title}>
            <WhatsappIcon />
        </WhatsappShareButton>

        <EmailShareButton url={url} subject={title} body={description}>
            <EmailIcon />
        </EmailShareButton>
    </div>
);

export default ShareButtons;