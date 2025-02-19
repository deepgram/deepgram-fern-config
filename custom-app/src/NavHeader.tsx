export function NavHeader() {
  return (
    <div className="tw-absolute tw-top-0 tw-inset-x-0 tw-backdrop-blur-2xl h-12 tw-z-30 tw-flex tw-items-center tw-bg-[#232329]">
      <div className="tw-relative tw-w-full tw-flex tw-justify-end tw-items-center tw-max-w-[var(--spacing-page-width)] tw-mx-auto tw-px-4 md:tw-px-6 lg:tw-px-8">
        <div className="tw-flex tw-gap-3 tw-items-center">
          <a href="https://playground.deepgram.com" target="_blank" rel="noopener noreferrer">
            <button className="tw-rounded-md tw-text-[#BBBBBF] tw-py-2 tw-px-3 tw-flex tw-items-center tw-gap-2">
              <img src="https://fern-image-hosting.s3.us-east-1.amazonaws.com/deepgram/sparkle.svg" width="16" height="16" alt="sparkle" />
              <span>Playground</span>
            </button>
          </a>
          <a href="https://console.deepgram.com" target="_blank" rel="noopener noreferrer">
            <button className="tw-rounded-md tw-text-[#BBBBBF] tw-py-2 tw-px-3 tw-flex tw-items-center tw-gap-2">
              <img src="https://fern-image-hosting.s3.us-east-1.amazonaws.com/deepgram/Key.svg" width="16" height="16" alt="key" />
              <span>Console</span>
            </button>
          </a>
          <a href="/" rel="noopener noreferrer">
            <button className="tw-rounded-md tw-text-[#BBBBBF] tw-py-2 tw-px-3 tw-flex tw-items-center tw-gap-2">
              <img src="https://fern-image-hosting.s3.us-east-1.amazonaws.com/deepgram/docs-open-book.svg" width="16" height="16" alt="docs" />
              <span>Documentation</span>
            </button>
          </a>
          <a href="https://community.deepgram.com" target="_blank" rel="noopener noreferrer">
            <button className="tw-rounded-md tw-text-[#BBBBBF] tw-py-2 tw-px-3 tw-flex tw-items-center tw-gap-2">
              <img src="https://fern-image-hosting.s3.us-east-1.amazonaws.com/deepgram/community-users.svg" width="16" height="16" alt="community" />
              <span>Community</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
