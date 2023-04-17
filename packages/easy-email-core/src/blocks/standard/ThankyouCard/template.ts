export const MJML = `
<mj-wrapper padding="0 16px" background-color="#F6F6F6" css-class="{{class}}">
    <mj-section border-radius="8px 8px 0 0" background-color="#FFFFFF" padding="16px 16px 0" css-class="container">
        <mj-column>
            <mj-text font-size="20px" font-weight="500" line-height="32px" color="#222222">{{title}}</mj-text>
            <mj-spacer height="10px"></mj-spacer>
            <mj-text font-size="14px" font-weight="400" line-height="20px" color="#404040">{{description}}</mj-text>
            <mj-spacer height="20px"></mj-spacer>
        </mj-column>
    </mj-section>
    <mj-section border-radius="0 0 8px 8px" background-color="#FFFFFF" padding="0 16px 16px" css-class="container">
        <mj-group>
            <mj-column width="70%">
                <mj-social align="left" icon-size="42px" text-padding="0 0 0 12px">
                    <mj-social-element src="{{image}}" vertical-align="top" border-radius="30px" >
                        <p style=""margin: 0;font-size: 14px; line-height: 24px; font-weight: 500; color: #102825">
                            {{name}}
                        </p>
                        <p style="margin: 0; font-size: 12px; line-height: 16px; font-weight: 400; color: #666666">
                          {{designation}}
                        </p>
                    </mj-social-element>
                </mj-social>
            </mj-column>
            <mj-column width="29.9%">
              <mj-image padding-left="10px" src="{{signatureImage}}" width="84px" height="46px" align="right" />
            </mj-column>
        </mj-group>
    </mj-section>
</mj-wrapper>
`;
