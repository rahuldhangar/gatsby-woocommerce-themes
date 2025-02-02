import React from "react";
// Uplers import Search from "../../components/home/search";
import CSSectionOverview from "../../components/cs/section-overview";
import CSRelatedProducts from "../../components/cs/related-products";
import CSOfferBanner from "../../components/cs/offer-banner";
import CSStoryTime from "../../components/cs/story-time";
import CSSkinConcerns from "../../components/cs/skin-concerns";
import CSProductBundles from "../../components/cs/product-bundles";
import { isEmpty } from 'lodash';
import Layout from "../../components/layout";
// Uplers import Carousel from "../../components/home/carousel";
import SEO from "../../components/seo";
import { getOgImage } from "../../utils/functions";

const FrontPage = ( props ) => {

	const {
		      pageContext: {
				page: { title, seo, uri },
				concern,
				csRelatedProducts,
			    // Uplers categories,
			    // categoryName,
				// postSearchData: { products, options }
		      }
	      } = props;

	return (
		<Layout>
			{
				! isEmpty( props.pageContext ) ? (
					<div className="home-page">
						<SEO
							title={ title }
							seoData={ seo }
							uri={ uri }
							header={ { siteTitle: 'Gatsby WooCommerce Theme' } }
							openGraphImage={ getOgImage( seo ) }
						/>
						{/* Uplers<Carousel categories={ categories }/> */}
						<CSSectionOverview />
						<CSRelatedProducts
							relatedProducts={ csRelatedProducts }
						/>
						<CSOfferBanner />
						<CSStoryTime />
						<CSSkinConcerns 
							concern = { concern }
						/>
						<CSProductBundles />
						{/* Uplers<Search
							products={ products }
							initialProducts={ products }
							engine={ options }
							category={ categoryName }
							categories={ categories }
						/> */}
					</div>
				) : (
					<div>Something went wrong</div>
				)
			}
		</Layout>
	)
};
export default FrontPage;

