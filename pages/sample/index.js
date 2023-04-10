import Link from "next/link";

export default function Sample() {
  return (
    <>
      <div class="not-found-section">
        <h1 class="error">Hi!</h1>
        <div class="page">
          Welcome to Sample Page
        </div>

        <div class="page">
          Sample ID: <span id="sample_id">JYSS989SPKS</span>
        </div>
       
      </div>

      <style jsx global>
        {`
          html,
          body {
            margin: 0;
            padding: 0;
            text-align: center;
            font-family: sans-serif;
            background-color: #e7ffff;
          }

          h1,
          a {
            margin: 0;
            padding: 0;
            text-decoration: none;
          }

          .not-found-section {
            padding: 4rem 2rem;
          }

          .not-found-section .error {
            font-size: 150px;
            color: #008b62;
            text-shadow: 1px 1px 1px #00593e, 2px 2px 1px #00593e,
              3px 3px 1px #00593e, 4px 4px 1px #00593e, 5px 5px 1px #00593e,
              6px 6px 1px #00593e, 7px 7px 1px #00593e, 8px 8px 1px #00593e,
              25px 25px 8px rgba(0, 0, 0, 0.2);
          }

          .not-found-section .page {
            margin: 2rem 0;
            font-size: 20px;
            font-weight: 600;
            color: #444;
          }

          .not-found-section .back-home {
            display: inline-block;
            border: 2px solid #222;
            color: #222;
            text-transform: uppercase;
            font-weight: 600;
            padding: 0.75rem 1rem 0.6rem;
            transition: all 0.2s linear;
            box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
          }

          .not-found-section .back-home:hover {
            background: #222;
            color: #ddd;
          }
        `}
      </style>
    </>
  );
}
