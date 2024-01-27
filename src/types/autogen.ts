export interface Address {
	line1?: string,
	line2?: string,
	line3?: string,
	sublocality?: string,
	city?: string,
	region?: string,
	postalCode?: string,
	extraDescription?: string,
	countryCode?: string,
}

export interface Coordinate {
	latitude?: number,
	longitude?: number,
}

export interface ImageThumbnail {
	url: string,
	width: number,
	height: number,
}

export interface Image {
	url: string,
	width: number,
	height: number,
	thumbnails?: ImageThumbnail[],
	alternateText?: string,
}

export interface Interval {
	start: any,
	end: any,
}

export interface DayHour {
	openIntervals?: Interval[],
	isClosed?: boolean,
}

export interface HolidayHours {
	date: string,
	openIntervals?: Interval[],
	isClosed?: boolean,
	isRegularHours?: boolean,
}

export interface Hours {
	monday?: DayHour,
	tuesday?: DayHour,
	wednesday?: DayHour,
	thursday?: DayHour,
	friday?: DayHour,
	saturday?: DayHour,
	sunday?: DayHour,
	holidayHours?: HolidayHours[],
	reopenDate?: string,
}

export interface TaxProsMain {
	description: string,
	address: Address,
	addressHidden: boolean,
	slug: string,
	geocodedCoordinate: Coordinate,
	headshot: Image,
	services: string[],
	c_advisorBio: string,
	c_uRLName: string,
	hours: Hours,
	c_areasOfExpertise: string[],
	c_metaDescription: string,
	c_title: string,
	c_metaKeywords: string,
	c_taxProName: string,
	c_officeLocationName: string,
	certifications: string[],
	yearsOfExperience: number,
	languages: string[],
	c_jotFormId: string,
	googlePlaceId: string,
	c_signedMapUrlPreProd: string,
	c_signedMapUrlProd: string,
	id: string,
	labels: any,
	c_pseudonymID: string,
	c_acceptingNewClients: boolean,
	mainPhone: any,
	twitterHandle: string,
	facebookPageUrl: string,
	instagramHandle: string,
	linkedInUrl: string,
	pinterestUrl: string,
	tikTokUrl: string,
	youTubeChannelUrl: string,
	c_tagline: string,
	c_epsImageUrl: string,
	c_allowsMeetInPerson: boolean,
	c_allowsMeetVirtually: boolean,
	c_personalWebsiteUrl: string,
}

export interface TaxProsPreview {
	description: string,
	address: Address,
	addressHidden: boolean,
	slug: string,
	geocodedCoordinate: Coordinate,
	headshot: Image,
	services: string[],
	c_advisorBio: string,
	c_uRLName: string,
	hours: Hours,
	c_areasOfExpertise: string[],
	c_metaDescription: string,
	c_title: string,
	c_metaKeywords: string,
	c_taxProName: string,
	c_officeLocationName: string,
	certifications: string[],
	yearsOfExperience: number,
	languages: string[],
	c_jotFormId: string,
	googlePlaceId: string,
	c_signedMapUrlPreProd: string,
	c_signedMapUrlProd: string,
	id: string,
	labels: any,
	c_pseudonymID: string,
	c_acceptingNewClients: boolean,
	mainPhone: any,
	twitterHandle: string,
	facebookPageUrl: string,
	instagramHandle: string,
	linkedInUrl: string,
	pinterestUrl: string,
	tikTokUrl: string,
	youTubeChannelUrl: string,
	c_tagline: string,
	c_epsImageUrl: string,
	c_allowsMeetInPerson: boolean,
	c_allowsMeetVirtually: boolean,
	c_personalWebsiteUrl: string,
}

export interface TaxProsReferred {
	description: string,
	address: Address,
	addressHidden: boolean,
	slug: string,
	geocodedCoordinate: Coordinate,
	headshot: Image,
	services: string[],
	c_advisorBio: string,
	c_uRLName: string,
	hours: Hours,
	c_areasOfExpertise: string[],
	c_metaDescription: string,
	c_title: string,
	c_metaKeywords: string,
	c_taxProName: string,
	c_officeLocationName: string,
	certifications: string[],
	yearsOfExperience: number,
	languages: string[],
	c_jotFormId: string,
	googlePlaceId: string,
	c_signedMapUrlPreProd: string,
	c_signedMapUrlProd: string,
	id: string,
	labels: any,
	c_pseudonymID: string,
	c_acceptingNewClients: boolean,
	mainPhone: any,
	twitterHandle: string,
	facebookPageUrl: string,
	instagramHandle: string,
	linkedInUrl: string,
	pinterestUrl: string,
	tikTokUrl: string,
	youTubeChannelUrl: string,
	c_tagline: string,
	c_epsImageUrl: string,
	c_allowsMeetInPerson: boolean,
	c_allowsMeetVirtually: boolean,
	c_personalWebsiteUrl: string,
}
