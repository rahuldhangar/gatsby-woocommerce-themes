import React from "react";
import { isEmpty } from 'lodash';
import Layout from "../../../components/layout";
import CustomPage from "../../../components/page/custom-page";
import SEO from "../../../components/seo";
import { getOgImage } from "../../../utils/functions";

const SingleCustomPage = ( props ) => {

	const { pageContext: { title, seo, uri } } = props;

	return (
		<Layout>
			{
				!isEmpty( props.pageContext ) ? (
					<>
						<SEO
							title={ title }
							seoData={ seo }
							uri={ uri }
							header={ { siteTitle: 'Gatsby WooCommerce Theme' } }
							openGraphImage={ getOgImage( seo ) }
						/>
						<CustomPage data={ props.pageContext }/>
					</>
				) : (
					<div>Something went wrong</div>
				)
			}
		</Layout>
	)
};
export default SingleCustomPage;

