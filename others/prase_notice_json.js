/**
"objectId" : "D5uWJdhgxy",
"createdAt" : "2019-04-30T21:58:42Z",
"updatedAt" : "2019-05-01T23:25:28Z",
"FolderNumber" : "F-15004-GTPA",
"Comments" : "",
"CoverageALimitOfLiability" : 0.0, 
"CoverageALineItems" : "[{\"amount\": 17085, \"description\": \"Repairs per Roofer\"}]",
"CoverageBLimitOfLiability" : 0.0,
"CoverageBLineItems" : "[{\"amount\": 0, \"description\": \"\"}]",
"CoverageCLimitOfLiability" : 0.0,
"CoverageCLineItems" : "[{\"amount\": 0, \"description\": \"\"}]",
"CoverageDLimitOfLiability" : 0.0,
"CoverageDLineItems" : "[{\"amount\": 0, \"description\": \"\"}]",
"PlusSpecialCoverage" : 0.0,
"TotalLoss" : 17085.0,
"LessDepreciationCovA" : 0.0,
"LessDepreciationCovB" : 0.0,
"LessDepreciationCovC" : 0.0,
 "LessDeductible" : 500.0,
"LessPriorPayments" : 0.0,
"TotalPayable" : 16585.0,
"CreatedBy" : "eqyEpmFXYu",
"UpdatedBy" : "eqyEpmFXYu",
"_rperm" : null,
"_wperm" : null,
"CarrierClaimNumber" : "12-3000004-18",
"SentToCarrier" : "2019-05-01T23:25:28Z",
"CoverageELineItems" : null,
"CoverageELossOfUse" : null
 */

 /**
  * 
  * {
  *     coverages: [
  *         {
  *             coverage_type_id: 1
  *             limit_of_liability:
  *             line_items: []
  *         },
  *         {
  *             coverage_type_id: 2
  *             limit_of_liability:
  *             line_items: []
  *         },
  * 
  *     ],
  *  
  *     less_depreciation: [
  *         {coverage_type_id: 1, amount: 100},
  *         {coverage_type_id: 2, amount: 2000},
  *     ],
  * 
  *     PlusSpecialCoverage:
  *     TotalLoss: '0.00',
        LessDeductible: '0.00',
        LessPriorPayments: '0.00',
        TotalPayable: '0.00',
        PolicyForm: '',
        Comments: ''
  *     
  * }
  */

let possible_abbreviations = ['A', 'B', 'C', 'D', 'E']

async function formatJson(bitsJson) {
    // find coverages
    let booksClaimDetail = await getBooksClaimDetail(bitsJson.CarrierClaimNumber)
    let claimNotice = {
        type: 'CLOSE',
        claim_number: bitsJson.CarrierClaimNumber,
        claim_id: booksClaimDetail.claim_id,
        created_at: bitsJson.createdAt,
        updated_at: bitsJson.updatedAt,
        status: 'COMPLETE'
    }
    let noticeData = {
        PlusSpecialCoverage: bitsJson.PlusSpecialCoverage,
        TotalLoss: bitsJson.TotalLoss,
        LessDeductible: bitsJson.LessDeductible,
        LessPriorPayments: bitsJson.LessPriorPayments,
        TotalPayable: bitsJson.TotalPayable,
        PolicyForm: booksClaimDetail.PolicyForm,
        Comments: bitsJson.Comments,
        coverages: getCoverageAndDepreciations(bitsJson, PolicyForm).coverages,
        less_depreciation: getCoverageAndDepreciations(bitsJson, PolicyForm).less_depreciation,
    }

    claimNotice.data = noticeData

    console.log(claimNotice)
    return claimNotice

}

function getCoverageAndDepreciations(bitsJson, PolicyForm) {
    let less_depreciation = []
    let coverages = []
    for(let i=0; i<possible_abbreviations.length; i++) {
        let covAbbreviation = possible_abbreviations[i]
        let covetage_type_id = getCoverageId(covAbbreviation, PolicyForm),
        if(bitsJson.hasOwnProperty(`LessDepreciationCov${covAbbreviation}`)) {
            less_depreciation.push({
                covetage_type_id,
                amount: bitsJson[`LessDepreciationCov${covAbbreviation}`]
            })
        }
        if(bitsJson.hasOwnProperty(`Coverage${covAbbreviation}LimitOfLiability`)) {
            coverages.push({
                covetage_type_id,
                limit_of_liability: bitsJson[`Coverage${covAbbreviation}LimitOfLiability`],
                line_items: bitsJson[`Coverage${covAbbreviation}LineItems`]
            })
        }
    }

    return {less_depreciation, coverages}
}

// To get coverage Id based on abbreviation and policyForm
function getCoverageId(abbreviation, PolicyForm) {
    let coverage_types = {
        'A': 1,
        'B': 2,
        'C': 3,
        'D': 4,
        'E': 5
    }
    return coverage_types[abbreviation]
}

async function getBooksClaimDetail(claimNumber) {
    // write a DB query to get all claim details
    return {
        PolicyForm: '',
        claim_id: 1,
    }
}

let bitsJson = {
    "objectId" : "D5uWJdhgxy",
    "createdAt" : "2019-04-30T21:58:42Z",
    "updatedAt" : "2019-05-01T23:25:28Z",
    "FolderNumber" : "F-15004-GTPA",
    "Comments" : "",
    "CoverageALimitOfLiability" : 0.0, 
    "CoverageALineItems" : "[{\"amount\": 17085, \"description\": \"Repairs per Roofer\"}]",
    "CoverageBLimitOfLiability" : 0.0,
    "CoverageBLineItems" : "[{\"amount\": 0, \"description\": \"\"}]",
    "CoverageCLimitOfLiability" : 0.0,
    "CoverageCLineItems" : "[{\"amount\": 0, \"description\": \"\"}]",
    "CoverageDLimitOfLiability" : 0.0,
    "CoverageDLineItems" : "[{\"amount\": 0, \"description\": \"\"}]",
    "PlusSpecialCoverage" : 0.0,
    "TotalLoss" : 17085.0,
    "LessDepreciationCovA" : 0.0,
    "LessDepreciationCovB" : 0.0,
    "LessDepreciationCovC" : 0.0,
    "LessDeductible" : 500.0,
    "LessPriorPayments" : 0.0,
    "TotalPayable" : 16585.0,
    "CreatedBy" : "eqyEpmFXYu",
    "UpdatedBy" : "eqyEpmFXYu",
    "_rperm" : null,
    "_wperm" : null,
    "CarrierClaimNumber" : "12-3000004-18",
    "SentToCarrier" : "2019-05-01T23:25:28Z",
    "CoverageELineItems" : null,
    "CoverageELossOfUse" : null
}

formatJson(bitsJson)