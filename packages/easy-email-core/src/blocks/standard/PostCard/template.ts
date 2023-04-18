export const MJML = `
<mj-wrapper padding="0 16px" background-color="#F6F6F6" css-class="{{class}}" >
    <mj-section padding="16px" css-class="container" background-color="#FFFFFF">
        <mj-column width="100%">
          <mj-text font-size="16px" font-weight="700" color="#4F4F4F" line-height="24px" >
            {{title}}
          </mj-text>
          <mj-spacer height="5px"></mj-spacer>
          <mj-text font-size="14px" font-weight="400" color="#828282" line-height="20px">
              {{description}}
              <a href="{{link}}" style="color:#0A71D1">...more</a>
          </mj-text>
          <mj-spacer height="12px"></mj-spacer>
          <mj-hero
            mode="fixed-height"
            height="120px"
            background-color="#E9E9E9"
            background-url="{{image}}"
            border-radius="4px"
          ></mj-hero >
        </mj-column>
    </mj-section>
</mj-wrapper>
`;
