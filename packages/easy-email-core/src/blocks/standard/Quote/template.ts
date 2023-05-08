export const MJML = `
<mj-wrapper background-color="#F6F6F6" css-class="{{class}}" >
    <mj-section padding="16px" css-class="container" background-color="#FFFFFF">
    <mj-group>
    {% if image %}
        <mj-column
            width="30%"
            padding="50px 16px 0 0"
        >
            <mj-hero
            mode="fixed-height"
            height="150px"
            background-color="#E9E9E9"
            background-url="{{image}}"
            background="no-repeat center center / cover"
            border-radius="4px"
          ></mj-hero>
        </mj-column>
    {% endif %}
        <mj-column {% if image %}width="70%"{% endif %}>
            <mj-image src={{quoteImg2}} width="48px" height="35px" align="left" />
            <mj-spacer height="8px"></mj-spacer>
            <mj-text font-size="18px" line-height="12px" font-weight="600" color="#404040">{{title}}</mj-text>
            <mj-spacer height="8px"></mj-spacer>
            <mj-text font-size="12px" font-weight="400" color="#828282">
            {{designation}}
            </mj-text>
            <mj-text width="100%" font-size="14px" padding="8px 0 0 0" line-height="20px" mj-class="text--md text--grey" color="#222">
                {{description}}
            </mj-text>
            <mj-spacer height="10px" />
            <mj-image mj-class="src-blockquote" width="36px" height="32px" src={{quoteImg1}} align="right" />
        </mj-column>
    </mj-group>
    </mj-section>
</mj-wrapper>
`;
