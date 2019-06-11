import React from "react";
import { Helmet } from "react-helmet";

class Meta extends React.PureComponent {
    render() {
        let meta = null;
        let data = this.props.data || null;

        if (data) {
            meta = (
                <Helmet encodeSpecialCharacters={true}>
                    <title>{data.title}</title>
                    <meta name="keywords" content={data.keywords} />
                    <meta name="description" content={data.description} />
                    <link href={data.canonical} rel="canonical" />
                    <meta name="props" content="yes" />
                </Helmet>
            );
        } else {
            meta = (
                <Helmet encodeSpecialCharacters={true}>
                    <meta
                        name="keywords"
                        content="react, redux, ssr, code-splitting, helmet, babel, webpack"
                    />
                    <meta
                        name="description"
                        content="A React powered SSR boilerplate"
                    />
                    <title>
                        react-code-splitting: A React powered SSR boilerplate
          </title>
                    <meta name="props" content="no" />
                </Helmet>
            );
        }
        return meta;
    }
}

export default Meta;
