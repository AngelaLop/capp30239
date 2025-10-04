# Angela Lopez Sanchez

## Description

Mapping Territorial Inequalities and Social Connectedness in High- and Upper-Middle-Income Countries
 
This project aims to visualise territorial inequalities within high and upper-middle-income countries using comparable regional data. The focus is on the social outcomes that encompass the World Bank Human Capital Index (education, health, labor and social protection). As an extra analysis I will examine how these outcomes relate to social connectedness, highlighting where gaps are largest and how regional networks might reinforce or mitigate disparities.

## Data Sources

### Data Source 1: OECD Regional data 

URL: [{URL}](https://data-explorer.oecd.org/?fs[0]=Topic%2C1%7CRegional%252C%20rural%20and%20urban%20development%23GEO%23%7CRegions%23GEO_REG%23&pg=0&fc=Topic&bp=true&snb=98)

The OECD Data Explorer provides regional indicators at the TL2 level for roughly 450 subnational regions across up to 48 countries, mainly OECD members. I will extract indicators for education, labor, health, and social protection. I may also include regional public investment, subject to availability and consistency checks.

Size and coverage. Row counts vary by indicator and time span. At TL2, a typical extract yields about 8,000 observations per indicator for a single year. A ten-year panel is about 80,000 observations per indicator. Coverage includes approximately 400–450 subnational regions with breakdowns by sex and two age groups.

Typical fields. Time period, indicator value, country name and ISO code, territorial level, region name and OECD TL code, sex, age group, indicator code and label, unit of measure, observation value, and standard metadata such as observation status or flags.

Notes. Final selections will prioritise indicators with consistent definitions across countries and years. Where necessary, I will document missing values, revisions, and any known comparability issues. 


### Data Source 2: Meta's Social Connectedness Index 

URL: https://dataforgood.facebook.com/dfg/tools/social-connectedness-index/#methodology

Size: ≈10 million rows (U.S. county–county matrix), 3 columns
      ≈5.8 million rows (European NUTS classification), 3 columns

Description:
Meta’s Social Connectedness Index (SCI) measures the relative intensity of social ties between any two places based on aggregated Facebook friendship links. For the 2021 snapshot, data are available at two main geographic levels: U.S. counties (FIPS codes) and European regions (NUTS codes). Each record represents a pair of locations and the rescaled SCI value for that pair.

U.S. county file: 
user_loc: origin county/NUTregion
fr_loc: destination (friend) county/NUTregion
scaled_sci: rescaled SCI (higher = stronger relative connectedness; not a count of friendships)

Intended use:
My idea is to use SCI to examine how social connectedness correlates with territorial inequalities. Two analysis paths are planned:

a U.S. zoom-in at the county level; and/or
a Europe-wide analysis using NUTS regions.

Notes on comparability:
Geographic standards differ by region (U.S. FIPS counties vs. OECD TL2 and  European NUTS vs OECD TL2). While broadly comparable, cross-region analysis will require careful harmonisation (e.g., mapping to a common territorial level such as OECD TL2/TL3 where feasible) to ensure consistent interpretation across geographies.

## Questions

{Numbered list of questions for course staff, if any.}

1. Does the proposal sound feasible for the timeframe of the course, or should I focus on the first part (OECD regional inequalities) and reserve the SCI analysis as a secondary/optional component?
