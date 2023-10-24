'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import { DashLayout } from '../../dashLayout'
import { BiArrowBack, BiLike } from 'react-icons/bi'
import RightSide from './components/right_side'

export default function Page() {
  const pathname = usePathname();
  return (
    <DashLayout >


      <div className='h-full w-full px-4 py-6 text-white'>
        <div className='flex gap-2 items-center'>
          <BiArrowBack />
          <span>Back</span>

        </div>
        <div className='flex max-h-screen gap-4 h-[100%]'>
        <div className='w-[80%] grow'>
          <div className='border flex items-center border-[#494949] px-4 py-4 mt-4 rounded-xl '>
            <div className='flex gap-2 items-center grow'>
              <span className='font-logirentRegular text-xl'>SpeechT5 (TTS task)</span>
              <span className='px-2 py-1 border border-[#494949] rounded-full text-xs '>Feature Extraction</span>
            </div>
            <div className=' flex items-center gap-3'>
              <span className='text-xs text-[#5D5D5D]'>Updated Sep, 12 2023</span>
              <div className='flex items-center'>
                <BiLike className=' text-[#5D5D5D]' />
                <span className='text-xs text-[#5D5D5D]'>127</span>
              </div>

            </div>

          </div>
          <div className='max-h-screen h-[80%] w-full border overflow-y-scroll rounded-xl mt-5 border-[#494949] px-4 py-4 '>
            <div className='mb-4'>SpeechT5 model fine-tuned for speech synthesis (text-to-speech) on LibriTTS.
              This model was introduced in SpeechT5: Unified-Modal Encoder-Decoder Pre-Training for Spoken Language Processing by Junyi Ao, Rui Wang, Long Zhou, Chengyi Wang, Shuo Ren, Yu Wu, Shujie Liu, Tom Ko, Qing Li, Yu Zhang, Zhihua Wei, Yao Qian, Jinyu Li, Furu Wei.
              SpeechT5 was first released in this repository, original weights. The license used is MIT.
            </div>
            <div className='mb-4'>
              Motivated by the success of T5 (Text-To-Text Transfer Transformer) in pre-trained natural language processing models, we propose a unified-modal SpeechT5 framework that explores the encoder-decoder pre-training for self-supervised speech/text representation learning. The SpeechT5 framework consists of a shared encoder-decoder network and six modal-specific (speech/text) pre/post-nets. After preprocessing the input speech/text through the pre-nets, the shared encoder-decoder network models the sequence-to-sequence transformation, and then the post-nets generate the output in the speech/text modality based on the output of the decoder.
              Leveraging large-scale unlabeled speech and text data, we pre-train SpeechT5 to learn a unified-modal representation, hoping to improve the modeling capability for both speech and text. To align the textual and speech information into this unified semantic space, we propose a cross-modal vector quantization approach that randomly mixes up speech/text states with latent units as the interface between encoder and decoder.
              Extensive evaluations show the superiority of the proposed SpeechT5 framework on a wide variety of spoken language processing tasks, including automatic speech recognition, speech synthesis, speech translation, voice conversion, speech enhancement, and speaker identification.
            </div>
            <div className='mb-4'>
              Motivated by the success of T5 (Text-To-Text Transfer Transformer) in pre-trained natural language processing models, we propose a unified-modal SpeechT5 framework that explores the encoder-decoder pre-training for self-supervised speech/text representation learning. The SpeechT5 framework consists of a shared encoder-decoder network and six modal-specific (speech/text) pre/post-nets. After preprocessing the input speech/text through the pre-nets, the shared encoder-decoder network models the sequence-to-sequence transformation, and then the post-nets generate the output in the speech/text modality based on the output of the decoder.
              Leveraging large-scale unlabeled speech and text data, we pre-train SpeechT5 to learn a unified-modal representation, hoping to improve the modeling capability for both speech and text. To align the textual and speech information into this unified semantic space, we propose a cross-modal vector quantization approach that randomly mixes up speech/text states with latent units as the interface between encoder and decoder.
              Extensive evaluations show the superiority of the proposed SpeechT5 framework on a wide variety of spoken language processing tasks, including automatic speech recognition, speech synthesis, speech translation, voice conversion, speech enhancement, and speaker identification.
            </div>
            <div className='mb-4'>
              Motivated by the success of T5 (Text-To-Text Transfer Transformer) in pre-trained natural language processing models, we propose a unified-modal SpeechT5 framework that explores the encoder-decoder pre-training for self-supervised speech/text representation learning. The SpeechT5 framework consists of a shared encoder-decoder network and six modal-specific (speech/text) pre/post-nets. After preprocessing the input speech/text through the pre-nets, the shared encoder-decoder network models the sequence-to-sequence transformation, and then the post-nets generate the output in the speech/text modality based on the output of the decoder.
              Leveraging large-scale unlabeled speech and text data, we pre-train SpeechT5 to learn a unified-modal representation, hoping to improve the modeling capability for both speech and text. To align the textual and speech information into this unified semantic space, we propose a cross-modal vector quantization approach that randomly mixes up speech/text states with latent units as the interface between encoder and decoder.
              Extensive evaluations show the superiority of the proposed SpeechT5 framework on a wide variety of spoken language processing tasks, including automatic speech recognition, speech synthesis, speech translation, voice conversion, speech enhancement, and speaker identification.
            </div>
          </div>
        </div>

       <div className='mt-4'>
       <RightSide  />
       </div>

        </div>

      </div>
    </DashLayout>
  );
}

