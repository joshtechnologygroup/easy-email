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
          <mj-spacer height="10px"></mj-spacer>
          <mj-image src="https://images.pexels.com/photos/1766838/pexels-photo-1766838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" border-radius="4px" height="120px"></mj-image>
          <mj-spacer height="10px"></mj-spacer>
          <mj-social align="left" icon-size="20px" text-padding="5px" padding="5px" container-background-color="#F9F9F9" border-radius="4px">
              <mj-social-element src="https://i.ibb.co/6X1rfVF/Vector-2.png" font-size="12px" font-weight="500" color="#000000" line-height="16px" >
                PDF Attachment-1.pdf
              </mj-social-element>
          </mj-social>
          <mj-spacer height="10px"></mj-spacer>
          <mj-social align="left" icon-size="16px" text-padding="0 0 0 5px">
              <mj-social-element src="https://i.ibb.co/ByHQbCD/bx-comment.png" font-size="14px" font-weight="400" color="#0A71D1" line-height="16px" >
                  Be the first one to talk about <span>&gt;</span>
              </mj-social-element>
          </mj-social>
        </mj-column>
    </mj-section>
</mj-wrapper>
`;
