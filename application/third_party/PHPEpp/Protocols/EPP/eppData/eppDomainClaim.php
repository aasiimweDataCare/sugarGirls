<?php
namespace Metaregistrar\EPP;

class eppDomainClaim
{
    /**
     *
     * @var string
     */
    private $validator = '';
    /**
     *
     * @var string
     */
    private $claimKey = '';

    /**
     * @return string
     */
    public function getClaimKey()
    {
        return $this->claimKey;
    }

    /**
     * @param string $claimKey
     */
    public function setClaimKey($claimKey)
    {
        $this->claimKey = $claimKey;
    }

    /**
     * @return string
     */
    public function getValidator()
    {
        return $this->validator;
    }

    /**
     * @param string $validator
     */
    public function setValidator($validator)
    {
        $this->validator = $validator;
    }

}